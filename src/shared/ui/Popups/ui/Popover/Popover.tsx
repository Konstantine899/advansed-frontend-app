// shared/ui/Popups/ui/Popover/Popover.tsx
import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../styles/popup.module.scss';
import { DropDownDirection } from '@/shared/types/ui';

interface PopoverProps {
  className?: string;
  direction?: DropDownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const {
    className, direction = 'bottom right', trigger, children
  } = props;
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames('', {}, [className, popupCls.popup])}>
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
