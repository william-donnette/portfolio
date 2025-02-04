import {FunctionComponent, HTMLProps, PropsWithChildren} from 'react';
import {classNames} from '../../utils/classNames';

interface ContainerProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {}

const Container: FunctionComponent<ContainerProps> = ({children, className, ...props}) => {
	return (
		<div {...props} className={classNames(className, 'px-2 py-4 md:p-4 lg:p-10 rounded-xl my-10 md:dark:bg-gray-800')}>
			{children}
		</div>
	);
};

export default Container;
