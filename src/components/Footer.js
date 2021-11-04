import React from 'react'

function Footer () {
    return (
        <div>
            <p style={{position: "absolute", bottom: "5px", width:"100%", textAlign: "center" }}>Copyright &copy; {new Date().getFullYear()} Martina Bublincova</p>
        </div>
    )
}

export default Footer
