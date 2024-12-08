type TechBagdeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBagdeProps) => {
    return (
        <span className="text-violet-400 bg-violet-900/80 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}