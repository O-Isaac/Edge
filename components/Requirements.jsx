

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
                    {Array.isArray(children) ? children.map((child, index) => (
                         <tr key={index}>
                            <th>
                                {child}
                            </th>
                         </tr>
                    )) : (
                        <tr>
                            <th>
                                {children}
                            </th>
                         </tr>
                    )}
                </tbody>
            </table>
      </section>
    );
}
 
export default Requirements;