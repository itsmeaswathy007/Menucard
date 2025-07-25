import MenuItem from "./MenuItem";

export default function MenuSection({ title, items, onAdd, expanded, onToggle }) {
  return (
    <div className="menu-section">
      <button className="menu-button" onClick={onToggle}>
        {title}
      </button>
      {expanded && (
        <div className="menu-items">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} onAdd={onAdd} />
          ))}
        </div>
      )}
    </div>
  );
}
