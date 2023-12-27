const FormField = (props) => {
  return (
    <>
      <div className="text-left">
        <h1 className="text-lg font-medium mb-2 text-gray-800">{props.title}</h1>
        <input
          type='text'
          className="border border-gray-200 ring-1 ring-gray-200 py-2.5 px-3.5 w-full rounded-md bg-white text-base placeholder-gray-200"
          placeholder={props.placeholder}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default FormField;