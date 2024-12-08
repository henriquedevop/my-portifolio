type TechBagdeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBagdeProps) => {
    return (
        <span className="text-emerald-400 bg-green-900/70 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}