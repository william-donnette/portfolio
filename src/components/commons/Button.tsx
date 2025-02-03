import {classNames} from '@site/src/utils/classNames';
import {FunctionComponent, HTMLProps, PropsWithChildren} from 'react';

const variantStyles = {
	primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white',
	secondary: 'text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white',
};

const proportionStyles = {
	small: 'px-3 py-1',
	medium: 'px-6 py-3',
};

interface ButtonProps extends PropsWithChildren, HTMLProps<HTMLAnchorElement> {
	variant?: 'primary' | 'secondary';
	proportion?: 'small' | 'medium';
}

const Button: FunctionComponent<ButtonProps> = ({children, className, variant, proportion = 'medium', ...props}) => {
	return (
		<a {...props} className={classNames('inline-flex items-center rounded-lg', variantStyles[variant], proportionStyles[proportion], className)}>
			{children}
		</a>
	);
};

export default Button;
