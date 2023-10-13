const RequirementsRows = ({ children }) => {
    const isOnly = !Array.isArray(children)

    if (isOnly) {
        return (
            <tr>
                <td>
                    {children}
                </td>
            </tr>
        )
    }

    return children.map((child, index) => (
        <tr key={index}>
           <td>
               {child}
           </td>
        </tr>
   ))
}

const Requirements = ({ children }) => {
    return ( 
        <section className="max-w-full mt-4 overflow-auto">
            <table className="text-left border">
                <thead className="[&>tr>th]:p-4 [&>tr>th]:border">
                    <tr>
                        <th>Mod</th>
                    </tr>
                </thead>
                <tbody className="[&>tr>th]:p-4 [&>tr>th]:border [&>tr>td]:p-4 [&>tr>td]:border">
                    <RequirementsRows>{children}</RequirementsRows>
                </tbody>
            </table>
      </section>
    );
}
 
export default Requirements;