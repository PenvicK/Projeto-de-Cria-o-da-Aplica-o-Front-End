import React, { useState } from 'react';
import tabela from '../data/produto.json';
import './styles/produto.css';


function Produto(){
    const [change1, setChange1] = useState(false)
    const handleChange1 = () => {
        setChange1(!change1)
        setChange2(false) 
    }
    const [change2, setChange2] = useState(false)
    const handleChange2 = () => {
        setChange2(!change2) 
        setChange1(false)
    }

    return(
        <>  
            <h1 className="title-produto">Selecione seu Plano</h1>
            <table className="linha-table-container">
                <tr className="linha-table">
                    <th className="tb-container">&nbsp;</th>
                    <td className="tb-container"><label onClick={handleChange1}  id={change1 ?"label-produto-selected":"label-produto"}>Basico</label></td>
                    <td className="tb-container"><label onClick={handleChange2} className={change2 ?"label-produto-selected":"label-produto"}>Premium</label></td>
                </tr>
                {tabela.map((tabela, index) =>
                <tr id="lt-container" className="linha-table">  
                    <th className="cl1">{tabela.coluna1}</th>
                    <td className={change1 ?"cl2-selected":"cl2"}>{tabela.coluna2}</td>
                    <td className={change2 ?"cl3-selected":"cl3"}>{tabela.coluna3}</td>
                </tr>
                )}
            </table>
        </>
    );
}
export default Produto;