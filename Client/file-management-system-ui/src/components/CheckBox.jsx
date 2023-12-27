function CheckBox(props) {
  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          id="rememberMe"
          className="form-checkbox h-6 w-4 text-blue-500"
          onChange={(e) => {
            props.setValue(e.target.checked);
            console.log(e.target.checked);
          }}
        />
        <label
          htmlFor="rememberMe"
          className="ml-2 text-gray-700 font-medium text-md"
        >
          {props.text}
        </label>
      </div>
    </>
  );
}

export default CheckBox;
