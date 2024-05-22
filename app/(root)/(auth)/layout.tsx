
interface Props {
    children: React.ReactNode,
}

const authLayout = ({ children }: Props) => {
    return(
        <div className='flex items-center justify-center h-lvh'>
            {children}
        </div>
    );
};

export default authLayout;