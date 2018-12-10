import React,{Component} from 'react';

 class Buscador extends Component {
    
    categoriaRef = React.createRef();

    enviarFormulario = (e) => {
        e.preventDefault();
        let valor = this.categoriaRef.current.value;
        this.props.enviarFormulario(valor);
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.enviarFormulario}>
                        <h2> Noticias por categoría </h2>
                        <div className="col s12 m8">
                            <select ref={this.categoriaRef}>
                                <option defaultValue="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                        <div className="inputfield col s12 m4 enviar">
                            <input type="submit" value="Enviar" className="btn amber"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Buscador