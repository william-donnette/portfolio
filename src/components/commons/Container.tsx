import {FunctionComponent, HTMLProps, PropsWithChildren} from 'react';
import {classNames} from '../../utils/classNames';

interface ContainerProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {}

const Container: FunctionComponent<ContainerProps> = ({children, className, ...props}) => {
	return (
		<div {...props} className={classNames(className, 'py-10 rounded-xl p-10 my-10 dark:bg-gray-800')}>
			{children}
		</div>
	);
};

export default Container;
