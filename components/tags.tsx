const Tags = (props: any) => {
    console.log(props)
    return (
        <div>
            <p>{props.tags.map((t: any, i: any) => (
                <li key={i}>{t}</li>
            ))}</p>
        </div>
    );
};

export default Tags;