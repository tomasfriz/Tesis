import Teams from "./Teams.jsx";

const List = ({ teamsList }) => {
    return (
        <>
            <ul>
                {teamsList.map((teams) => (
                    <Teams key={teams._id} teams={teams} />
                ))}
            </ul>
        </>
    );
};

export default List;