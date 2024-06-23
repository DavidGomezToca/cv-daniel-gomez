function App() {
  return (
    <div className="App">
      <div className="top-arrow-right" />
      <div className="Intro">
        <img className="ProfilePic" src="profile.png" alt="profile" />
        <h1>DANIEL GÓMEZ MARÍN</h1>
        <h3 className="Titulo">TÉCNICO ELÉCTRONICO Y AUTOMÁTICO</h3>
      </div>
      <div className="HR">
        <hr />
      </div>
      <div className="SectionA">
        <SectionTitle text="SOBRE MÍ" />
        <ul>
          <li><p className="PSobreMi">Gran capacidad de aprendizaje y adaptación al puesto a desempeñar.</p></li>
          <li><p className="PSobreMi">Gran interés en crecer dentro de la empresa y hacerla crecer.</p></li>
          <li><p className="PSobreMi">Buena habilidad en ventas y atención al cliente.</p></li>
          <li><p className="PSobreMi">Nivel B1 de inglés (Trinity College London)</p></li>
          <li><p className="PSobreMi">Excelente disposición en electrónica avanzada y nuevas tecnologías.</p></li>
        </ul>
        <div className="ContactSobreMi">
          <img src="icons/linkedin.png" alt="linkedin" className="IconSobreMi" />
          <a href="https://www.linkedin.com/in/daniel-gomez-301185234">Daniel Gómez</a>
        </div>
        <div className="ContactSobreMi">
          <img src="icons/ring-phone.png" alt="telefono" className="IconSobreMi" />
          <a href="tel:656649109">+34 656 64 91 09</a>
        </div>
        <div className="ContactSobreMi">
          <img src="icons/correo-electronico.png" alt="correo electronico" className="IconSobreMi" />
          <a href="mailto:dani:rvmgomez@gmail.com">dani.rvgomez@gmail.com</a>
        </div>
        <div className="ContactSobreMi">
          <img src="icons/pdf.png" alt="pdf" className="IconSobreMi" />
          <a
            class="download-button"
            download="CV Daniel Gómez"
            href="DANIEL GÓMEZ CV.pdf">
            Descargar CV
          </a>
        </div>
      </div>
      <div className="SectionB">
        <SectionTitle text="EXPERIENCIA" />
        <div className="DivExperiencia">
          <h4>RUMAR ALQUILER Y VENTA DE MAQUINARIA</h4>
          <p className="FechaExperiencia">JUNIO 2022 - ACTUALMENTE, MADRID</p>
          <p>
            Atención al cliente en tienda, trato con proveedores y clientes. Reparación y mantenimiento de máquinas eléctricas. Gestión de almacén y su logística. Amplios conocimientos en el sector.
          </p>
        </div>
        <div className="DivExperiencia">
          <h4>BUNKER SEGURIDAD ELECTRÓNICA S.L</h4>
          <p className="FechaExperiencia">SEPTIEMBRE 2021 - DICIEMBRE 2021, MADRID</p>
          <p>
            Preparación de enviós, embalajes y su logística. Instalación y reparación de equipos eléctricos y electrónicos relacionados con la seguridad.
          </p>
        </div></div>
      <div className="SectionA">
        <SectionTitle text="FORMACIONES" />
        <div className="DivFormaciones">
          <h4>C.F.G.M INSTALACIONES ELÉCTRICAS Y AUTOMÁTICAS</h4>
          <p>I.E.S PACIFICO SEPTIEMBRE 2021 - JUNIO 2024, MADRID</p>
        </div>
        <div className="DivFormaciones">
          <h4>F.P.B INFORMÁTICA Y COMUNICACIONES</h4>
          <p>I.E.S PACIFICO SEPTIEMBRE 2019 - JULIO 2021, MADRID</p>
        </div>
        <div className="DivFormaciones">
          <h4>E.S.O</h4>
          <p>I.E.S PACIFICO SEPTIEMBRE 2019 - JULIO 2021, MADRID</p>
        </div>
        <div className="DivFormaciones">
          <h4>B2.1 ENGLISH</h4>
          <p>E.O.I VILLAVERDE SEPTIEMBRE 2023 - JUNIO 2024, MADRID</p>
        </div>
        <div className="DivFormaciones">
          <h4>+ CARNET CONDUCIR B</h4>
        </div>
        <div className="DivFormaciones">
          <h4>+ CARNET CARRETILLERO</h4>
        </div>
        <div className="DivFormaciones">
          <h4>+ CURSO P.R.L</h4>
        </div>
      </div>
      <div className="SectionB">
        <SectionTitle text="REFERENCIAS" />
        <div className="DivReferencias">
          <h4>RUMAR ALQUILER Y VENTA DE MAQUINARIA</h4>
          <p className="ContactoReferencia">CARLOS MARTINEZ - <a href="tel:629311911">629 31 19 11</a></p>
          <p>PEDRO RUBIO - <a href="tel:615498552">615 49 85 52</a></p>
        </div>
      </div>
      {/* <div className="DivBottomArrowRight">
        <div className="bottom-arrow-right" />
      </div> */}
    </div>
  );
}

function SectionTitle(props) {
  return (
    <h2 className="SectionTitle">{props.text}</h2>
  );
}

export default App;
