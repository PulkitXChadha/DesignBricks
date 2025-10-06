import userEvent from "@testing-library/user-event";
import React from &apos;react&apos;;
import { render, screen } from &apos;@testing-library/react&apos;;
import { axe, toHaveNoViolations } from &apos;jest-axe&apos;;
import { Notification, NotificationProps } from &apos;./Notification&apos;;

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe(&apos;Notification&apos;, () => {
  // Basic rendering tests
  describe(&apos;Basic Rendering&apos;, () => {
    it(&apos;renders with default props&apos;, () => {
      render(<Notification>Notification message</Notification>);
      
      const notification = screen.getByRole(&apos;alert&apos;);
      expect(notification).toBeInTheDocument();
      expect(notification).toHaveClass(&apos;db-notification&apos;, &apos;db-notification--info&apos;);
      expect(notification).toHaveTextContent(&apos;Notification message&apos;);
    });

    it(&apos;renders with custom className&apos;, () => {
      render(<Notification className=\"quot;custom-notification\"quot;>Message</Notification>);
      
      const notification = screen.getByRole(&apos;alert&apos;);
      expect(notification).toHaveClass(&apos;db-notification&apos;, &apos;custom-notification&apos;);
    });

    it(&apos;forwards ref correctly&apos;, () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Notification ref={ref}>Message</Notification>);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass(&apos;db-notification&apos;);
    });

    it(&apos;forwards additional props&apos;, () => {
      render(
        <Notification data-testid=\"quot;notification\"quot; id=\"quot;test-notification\"quot;>
          Message
        </Notification>
      );
      
      const notification = screen.getByTestId(&apos;notification&apos;);
      expect(notification).toHaveAttribute(&apos;id&apos;, &apos;test-notification&apos;);
    });

    it(&apos;has proper ARIA semantics&apos;, () => {
      render(<Notification>Semantic notification</Notification>);
      
      const notification = screen.getByRole(&apos;alert&apos;);
      expect(notification).toHaveAttribute(&apos;role&apos;, &apos;alert&apos;);
      expect(notification).toHaveAttribute(&apos;aria-live&apos;, &apos;polite&apos;);
    });

    it(&apos;renders children in description element&apos;, () => {
      const { container } = render(<Notification>Notification content</Notification>);
      
      const description = container.querySelector(&apos;.db-notification__description&apos;);
      expect(description).toBeInTheDocument();
      expect(description).toHaveTextContent(&apos;Notification content&apos;);
    });
  });

  // Variant tests
  describe(&apos;Variants&apos;, () => {
    const variants: Array<NotificationProps[&apos;variant&apos;]> = [&apos;info&apos;, &apos;success&apos;, &apos;warning&apos;, &apos;error&apos;];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Notification variant={variant}>Variant message</Notification>);
        
        const notification = screen.getByRole(&apos;alert&apos;);
        expect(notification).toHaveClass(`db-notification--${variant}`);
      });

      it(`renders ${variant} variant with default icon`, () => {
        const { container } = render(<Notification variant={variant}>Message</Notification>);
        
        const icon = container.querySelector(&apos;.db-notification__icon svg&apos;);
        expect(icon).toBeInTheDocument();
      });
    });

    it(&apos;applies info variant by default&apos;, () => {
      render(<Notification>Default variant</Notification>);
      
      const notification = screen.getByRole(&apos;alert&apos;);
      expect(notification).toHaveClass(&apos;db-notification--info&apos;);
    });

    it(&apos;applies info variant when variant is undefined&apos;, () => {
      render(<Notification variant={undefined}>Undefined variant</Notification>);
      
      const notification = screen.getByRole(&apos;alert&apos;);
      expect(notification).toHaveClass(&apos;db-notification--info&apos;);
    });
  });

  // Title tests
  describe(&apos;Title&apos;, () => {
    it(&apos;renders with title&apos;, () => {
      const { container } = render(
        <Notification title=\"quot;Important\"quot;>Description text</Notification>
      );
      
      const title = container.querySelector(&apos;.db-notification__title&apos;);
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(&apos;Important&apos;);
    });

    it(&apos;renders without title when not provided&apos;, () => {
      const { container } = render(<Notification>Message only</Notification>);
      
      const title = container.querySelector(&apos;.db-notification__title&apos;);
      expect(title).not.toBeInTheDocument();
    });

    it(&apos;renders title with description&apos;, () => {
      const { container } = render(
        <Notification title=\"quot;Title\"quot;>Description</Notification>
      );
      
      const title = container.querySelector(&apos;.db-notification__title&apos;);
      const description = container.querySelector(&apos;.db-notification__description&apos;);
      
      expect(title).toHaveTextContent(&apos;Title&apos;);
      expect(description).toHaveTextContent(&apos;Description&apos;);
    });

    it(&apos;renders empty title&apos;, () => {
      const { container } = render(
        <Notification title=\"quot;\"quot;>Message</Notification>
      );
      
      const title = container.querySelector(&apos;.db-notification__title&apos;);
      expect(title).not.toBeInTheDocument();
    });

    it(&apos;renders title as ReactNode&apos;, () => {
      const { container } = render(
        <Notification title={<strong>Bold Title</strong>}>Message</Notification>
      );
      
      const title = container.querySelector(&apos;.db-notification__title&apos;);
      expect(title).toBeInTheDocument();
      expect(title?.querySelector(&apos;strong&apos;)).toHaveTextContent(&apos;Bold Title&apos;);
    });
  });

  // Custom icon tests
  describe(&apos;Custom Icon&apos;, () => {
    const CustomIcon = () => <span data-testid=\"quot;custom-icon\"quot;>🔔</span>;

    it(&apos;renders with custom icon&apos;, () => {
      const { container } = render(
        <Notification icon={<CustomIcon />}>Message</Notification>
      );
      
      expect(screen.getByTestId(&apos;custom-icon&apos;)).toBeInTheDocument();
      const icon = container.querySelector(&apos;.db-notification__icon&apos;);
      expect(icon).toContainElement(screen.getByTestId(&apos;custom-icon&apos;));
    });

    it(&apos;overrides default icon with custom icon&apos;, () => {
      const { container } = render(
        <Notification variant=\"quot;success\"quot; icon={<CustomIcon />}>Message</Notification>
      );
      
      expect(screen.getByTestId(&apos;custom-icon&apos;)).toBeInTheDocument();
      
      // Should not have the default success icon SVG alongside custom icon
      const icon = container.querySelector(&apos;.db-notification__icon&apos;);
      const svgs = icon?.querySelectorAll(&apos;svg&apos;);
      expect(svgs?.length).toBe(0);
    });

    it(&apos;renders icon with null value&apos;, () => {
      const { container } = render(
        <Notification icon={null}>Message</Notification>
      );
      
      const icon = container.querySelector(&apos;.db-notification__icon&apos;);
      expect(icon).toBeInTheDocument();
      // Should render default icon for info variant
      expect(icon?.querySelector(&apos;svg&apos;)).toBeInTheDocument();
    });
  });

  // Closable functionality tests
  describe(&apos;Closable Functionality&apos;, () => {
    it(&apos;renders without close button by default&apos;, () => {
      const { container } = render(<Notification>Message</Notification>);
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;);
      expect(closeButton).not.toBeInTheDocument();
    });

    it(&apos;renders close button when closable is true&apos;, () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;);
      expect(closeButton).toBeInTheDocument();
      expect(closeButton?.tagName).toBe(&apos;BUTTON&apos;);
    });

    it(&apos;close button has correct accessibility attributes&apos;, () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;);
      expect(closeButton).toHaveAttribute(&apos;type&apos;, &apos;button&apos;);
      expect(closeButton).toHaveAttribute(&apos;aria-label&apos;, &apos;Close notification&apos;);
    });

    it(&apos;calls onClose when close button is clicked&apos;, async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Notification closable onClose={handleClose}>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;) as HTMLElement;
      await userEvent.click(closeButton);
      
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it(&apos;does not call onClose if not provided&apos;, async () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;) as HTMLElement;
      
      // Should not throw error
      expect(async () => {
        await userEvent.click(closeButton);
      }).not.toThrow();
    });

    it(&apos;close button renders with icon&apos;, () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;);
      const icon = closeButton?.querySelector(&apos;svg&apos;);
      expect(icon).toBeInTheDocument();
    });

    it(&apos;supports keyboard interaction on close button&apos;, async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Notification closable onClose={handleClose}>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;) as HTMLElement;
      closeButton.focus();
      
      expect(closeButton).toHaveFocus();
      
      await userEvent.keyboard(&apos;{Enter}&apos;);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  // Position tests (prop exists but may not affect rendering)
  describe(&apos;Position Prop&apos;, () => {
    const positions: Array<NotificationProps[&apos;position&apos;]> = [
      &apos;top-right&apos;,
      &apos;top-left&apos;,
      &apos;bottom-right&apos;,
      &apos;bottom-left&apos;,
      &apos;top-center&apos;,
      &apos;bottom-center&apos;
    ];

    positions.forEach(position => {
      it(`accepts ${position} position prop`, () => {
        render(<Notification position={position}>Message</Notification>);
        
        const notification = screen.getByRole(&apos;alert&apos;);
        expect(notification).toBeInTheDocument();
        // Position prop exists but may be used by parent toast container
      });
    });
  });

  // Content tests
  describe(&apos;Content&apos;, () => {
    it(&apos;renders with text content&apos;, () => {
      render(<Notification>Simple text message</Notification>);
      
      expect(screen.getByText(&apos;Simple text message&apos;)).toBeInTheDocument();
    });

    it(&apos;renders with complex ReactNode content&apos;, () => {
      render(
        <Notification>
          <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </div>
        </Notification>
      );
      
      expect(screen.getByText(&apos;Paragraph 1&apos;)).toBeInTheDocument();
      expect(screen.getByText(&apos;Paragraph 2&apos;)).toBeInTheDocument();
    });

    it(&apos;renders without children&apos;, () => {
      const { container } = render(
        <Notification title=\"quot;Title only\"quot; />
      );
      
      const description = container.querySelector(&apos;.db-notification__description&apos;);
      expect(description).not.toBeInTheDocument();
    });

    it(&apos;renders with title and children&apos;, () => {
      render(
        <Notification title=\"quot;Success\"quot;>
          Operation completed successfully
        </Notification>
      );
      
      expect(screen.getByText(&apos;Success&apos;)).toBeInTheDocument();
      expect(screen.getByText(&apos;Operation completed successfully&apos;)).toBeInTheDocument();
    });

    it(&apos;handles empty children gracefully&apos;, () => {
      const { container } = render(
        <Notification title=\"quot;Title\"quot;>{&apos;&apos;}</Notification>
      );
      
      const description = container.querySelector(&apos;.db-notification__description&apos;);
      expect(description).not.toBeInTheDocument();
    });
  });

  // Edge cases
  describe(&apos;Edge Cases&apos;, () => {
    it(&apos;renders with all props combined&apos;, () => {
      const handleClose = jest.fn();
      const CustomIcon = () => <span>🔔</span>;
      
      render(
        <Notification
          variant=\"quot;success\"quot;
          title=\"quot;Success!\"quot;
          closable
          onClose={handleClose}
          icon={<CustomIcon />}
          position=\"quot;top-right\"quot;
          className=\"quot;custom-class\"quot;
          data-testid=\"quot;full-notification\"quot;
        >
          All features enabled
        </Notification>
      );
      
      const notification = screen.getByTestId(&apos;full-notification&apos;);
      expect(notification).toHaveClass(&apos;db-notification--success&apos;, &apos;custom-class&apos;);
      expect(screen.getByText(&apos;Success!&apos;)).toBeInTheDocument();
      expect(screen.getByText(&apos;All features enabled&apos;)).toBeInTheDocument();
    });

    it(&apos;handles very long content&apos;, () => {
      const longContent = &apos;A&apos;.repeat(500);
      const { container } = render(
        <Notification title=\"quot;Long Content\"quot;>{longContent}</Notification>
      );
      
      const description = container.querySelector(&apos;.db-notification__description&apos;);
      expect(description).toHaveTextContent(longContent);
    });

    it(&apos;handles special characters in content&apos;, () => {
      render(
        <Notification>Special chars: &lt;&gt;&amp;\"quot;&apos;</Notification>
      );
      
      expect(screen.getByText(/Special chars:/)).toBeInTheDocument();
    });

    it(&apos;renders with multiple notifications&apos;, () => {
      const { container } = render(
        <>
          <Notification variant=\"quot;info\"quot;>Info 1</Notification>
          <Notification variant=\"quot;success\"quot;>Success 1</Notification>
          <Notification variant=\"quot;warning\"quot;>Warning 1</Notification>
        </>
      );
      
      const notifications = container.querySelectorAll(&apos;.db-notification&apos;);
      expect(notifications).toHaveLength(3);
    });

    it(&apos;preserves notification content during re-render&apos;, () => {
      const { rerender } = render(
        <Notification variant=\"quot;info\"quot;>Original</Notification>
      );
      
      expect(screen.getByText(&apos;Original&apos;)).toBeInTheDocument();
      
      rerender(<Notification variant=\"quot;success\"quot;>Updated</Notification>);
      
      expect(screen.queryByText(&apos;Original&apos;)).not.toBeInTheDocument();
      expect(screen.getByText(&apos;Updated&apos;)).toBeInTheDocument();
    });
  });

  // Style and class tests
  describe(&apos;Styling&apos;, () => {
    it(&apos;applies base class&apos;, () => {
      const { container } = render(<Notification>Message</Notification>);
      
      const notification = container.querySelector(&apos;.db-notification&apos;);
      expect(notification).toBeInTheDocument();
    });

    it(&apos;applies icon wrapper class&apos;, () => {
      const { container } = render(<Notification>Message</Notification>);
      
      const iconWrapper = container.querySelector(&apos;.db-notification__icon&apos;);
      expect(iconWrapper).toBeInTheDocument();
    });

    it(&apos;applies content wrapper class&apos;, () => {
      const { container } = render(<Notification>Message</Notification>);
      
      const content = container.querySelector(&apos;.db-notification__content&apos;);
      expect(content).toBeInTheDocument();
    });

    it(&apos;applies title class when title is present&apos;, () => {
      const { container } = render(
        <Notification title=\"quot;Title\"quot;>Message</Notification>
      );
      
      const title = container.querySelector(&apos;.db-notification__title&apos;);
      expect(title).toBeInTheDocument();
    });

    it(&apos;applies description class when children are present&apos;, () => {
      const { container } = render(<Notification>Description</Notification>);
      
      const description = container.querySelector(&apos;.db-notification__description&apos;);
      expect(description).toBeInTheDocument();
    });

    it(&apos;applies close button class when closable&apos;, () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;);
      expect(closeButton).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe(&apos;Accessibility&apos;, () => {
    it(&apos;has no accessibility violations&apos;, async () => {
      const { container } = render(
        <Notification>Accessible notification</Notification>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it(&apos;has no accessibility violations with all features&apos;, async () => {
      const { container } = render(
        <Notification
          variant=\"quot;success\"quot;
          title=\"quot;Success Title\"quot;
          closable
          onClose={() => {}}
        >
          Success message
        </Notification>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it(&apos;has no accessibility violations with custom icon&apos;, async () => {
      const { container } = render(
        <Notification icon={<span role=\"quot;img\"quot; aria-label=\"quot;bell\"quot;>🔔</span>}>
          Message
        </Notification>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it(&apos;has proper alert role&apos;, () => {
      render(<Notification>Alert message</Notification>);
      
      const alert = screen.getByRole(&apos;alert&apos;);
      expect(alert).toBeInTheDocument();
    });

    it(&apos;has aria-live attribute&apos;, () => {
      render(<Notification>Live message</Notification>);
      
      const notification = screen.getByRole(&apos;alert&apos;);
      expect(notification).toHaveAttribute(&apos;aria-live&apos;, &apos;polite&apos;);
    });

    it(&apos;close button is keyboard accessible&apos;, async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Notification closable onClose={handleClose}>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;) as HTMLElement;
      
      // Tab to the button
      await userEvent.tab();
      expect(closeButton).toHaveFocus();
      
      // Activate with Space
      await userEvent.keyboard(&apos; &apos;);
      expect(handleClose).toHaveBeenCalled();
    });

    it(&apos;has proper button type for close button&apos;, () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;);
      expect(closeButton).toHaveAttribute(&apos;type&apos;, &apos;button&apos;);
    });
  });

  // Integration tests
  describe(&apos;Integration&apos;, () => {
    it(&apos;works with different variant and closable combinations&apos;, () => {
      const variants: Array<NotificationProps[&apos;variant&apos;]> = [&apos;info&apos;, &apos;success&apos;, &apos;warning&apos;, &apos;error&apos;];
      
      variants.forEach(variant => {
        const { container, unmount } = render(
          <Notification variant={variant} closable>
            {variant} message
          </Notification>
        );
        
        expect(container.querySelector(&apos;.db-notification&apos;)).toHaveClass(
          `db-notification--${variant}`
        );
        expect(container.querySelector(&apos;.db-notification__close&apos;)).toBeInTheDocument();
        
        unmount();
      });
    });

    it(&apos;handles rapid close button clicks&apos;, async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Notification closable onClose={handleClose}>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;) as HTMLElement;
      
      await userEvent.click(closeButton);
      await userEvent.click(closeButton);
      await userEvent.click(closeButton);
      
      expect(handleClose).toHaveBeenCalledTimes(3);
    });

    it(&apos;maintains focus on close button after click attempt&apos;, async () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector(&apos;.db-notification__close&apos;) as HTMLElement;
      closeButton.focus();
      
      expect(closeButton).toHaveFocus();
      
      await userEvent.click(closeButton);
      
      // Button should still exist and be focusable
      expect(closeButton).toBeInTheDocument();
    });
  });

  // displayName test
  describe(&apos;Component Meta&apos;, () => {
    it(&apos;has correct displayName&apos;, () => {
      expect(Notification.displayName).toBe(&apos;Notification&apos;);
    });
  });
});




