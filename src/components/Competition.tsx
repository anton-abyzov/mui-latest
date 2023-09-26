export interface CompetitionProps {
    name: string;
}

export const Competition: React.FC<CompetitionProps> = ({ name }) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};
