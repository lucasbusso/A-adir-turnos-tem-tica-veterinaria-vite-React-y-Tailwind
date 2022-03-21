const Error = ({children}) => {
  return (
    <div className="text-red-600 text-left text-sm p-3 uppercase font-semibold rounded-md mb-3">
        {children}
    </div>
  )
}

export default Error