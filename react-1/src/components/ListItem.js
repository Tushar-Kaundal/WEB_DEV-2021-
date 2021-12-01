const ListItem = (props) => {
  return (
    <li>
      <div>
        {props.chore}
        <button style={{ background: "crimson", color: "white" }}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
