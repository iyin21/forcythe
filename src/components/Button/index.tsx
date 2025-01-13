interface buttonInterface
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
}
const Button = ({ children, className, ...rest }: buttonInterface) => {
    return (
        <div className="relative group w-fit">
            <button
                className={` bg-white-100 custom-animate text-black-100 font-semibold text-base py-[12px] px-5 rounded-full relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white-100 hover:shadow-md whitespace-nowrap transition ${className}`}
                {...rest}
            >
                {children}
            </button>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
        </div>
    )
}

export default Button
