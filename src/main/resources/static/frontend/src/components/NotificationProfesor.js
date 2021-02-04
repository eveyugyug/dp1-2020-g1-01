import React, { Component } from 'react'

import ExtraccionSolicitudes from './ExtraccionSolicitudes';
import axios from 'axios';
import Auth from './Auth';
import HomeReal from './HomeReal';
import NotificacionesTable from './NotificacionesTable';
export default class NotificationProfesor extends Component {
  constructor() {
    super();
    this.state = {
      numeroSolicitudes: 0,
      numeroEventos: 0,
      comprobation: false
    }
    this.solicitudesComponent = new ExtraccionSolicitudes();
  }

   componentDidMount() {
    this.solicitudesComponent.getSolicitudes(this.props.urlBase).then(data => this.setState({numeroSolicitudes: data.length}));
    axios.get(this.props.urlBase + "/auth", {withCredentials: true}).then(res => {
      if(res.data==="profesor"){
          this.setState({comprobation: true})
      }
      })
     

  }




  render() {  
    if (!this.state.comprobation) {
    return <Auth authority="teacher"></Auth>
  } else {

    console.log("hay en total : " + this.state.numeroSolicitudes)
    return (
      <div>
        <NotificacionesTable solicitudes={this.state.numeroSolicitudes}></NotificacionesTable>
      </div>

    )
  }
}
}