type ListProps<T> = {
    items: T[];
    handleClick: (value: T) => void;
  };
  
  export const List = <T extends string | { name: string; surname: string }>({
    items,
    handleClick,
  }: ListProps<T>) => {
    return (
      <div>
        <h2>List of items</h2>
        {items.map((item, index) => (
          <div key={index}>
            <button onClick={() => handleClick(item)}>
              {typeof item === "string" ? item : `${item.name} - ${item.surname}`}
            </button>
          </div>
        ))}
      </div>
    );
  };
