import styles from "./Night.module.scss";

const toNight = () => {
  const d = document;
  let status = localStorage.getItem("darkModeBruno");
  if (status === "true") {
    localStorage.removeItem("darkModeBruno");
    localStorage.setItem("darkModeBruno", "false");
    if(d.getElementById("cabeca")) {
      d.getElementById("cabeca").classList.remove("cabecaRotate");
      d.getElementById("fechado").style.opacity = "0";
      d.getElementById("luz").classList.remove("toBlink")
      d.getElementById("esquerdo").style.opacity = "1";
    }


  } else {
    localStorage.removeItem("darkModeBruno");
    localStorage.setItem("darkModeBruno", "true");
    if(d.getElementById("cabeca")) {
      d.getElementById("cabeca").classList.add("cabecaRotate");
      d.getElementById("fechado").style.opacity = "1";
      d.getElementById("luz").classList.add("toBlink")
      d.getElementById("esquerdo").style.opacity = "0";
    }

  }

  let classesBody = d.body.classList;
  let sol = d.getElementById("sol").classList;
  let lua = d.getElementById("lua").classList;

  classesBody.toggle("night");
  classesBody.toggle("day");
  sol.toggle("show");
  sol.toggle("notShow");
  lua.toggle("show");
  lua.toggle("notShow");
};

const Nigth = () => {
  return (
    <div>
      <div
        onClick={toNight}
        className={styles.icons}
        title="Alternar entre modo diurno/noturno"
      >
        <svg
          id="sol"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="45.16px"
          height="45.16px"
          viewBox="0 0 45.16 45.16"
        >
          <path
            d="M22.58,11.269c-6.237,0-11.311,5.075-11.311,11.312s5.074,11.312,11.311,11.312c6.236,0,11.311-5.074,11.311-11.312
			S28.816,11.269,22.58,11.269z"
          />
          <path
            d="M22.58,7.944c-1.219,0-2.207-0.988-2.207-2.206V2.207C20.373,0.988,21.361,0,22.58,0c1.219,0,2.207,0.988,2.207,2.207
					v3.531C24.787,6.956,23.798,7.944,22.58,7.944z"
          />
          <path
            d="M22.58,37.215c-1.219,0-2.207,0.988-2.207,2.207v3.53c0,1.22,0.988,2.208,2.207,2.208c1.219,0,2.207-0.988,2.207-2.208
					v-3.53C24.787,38.203,23.798,37.215,22.58,37.215z"
          />
          <path
            d="M32.928,12.231c-0.861-0.862-0.861-2.259,0-3.121l2.497-2.497c0.861-0.861,2.259-0.861,3.121,0
					c0.862,0.862,0.862,2.26,0,3.121l-2.497,2.497C35.188,13.093,33.791,13.093,32.928,12.231z"
          />
          <path
            d="M12.231,32.93c-0.862-0.863-2.259-0.863-3.121,0l-2.497,2.496c-0.861,0.861-0.862,2.26,0,3.121
					c0.862,0.861,2.26,0.861,3.121,0l2.497-2.498C13.093,35.188,13.093,33.79,12.231,32.93z"
          />
          <path
            d="M37.215,22.58c0-1.219,0.988-2.207,2.207-2.207h3.531c1.219,0,2.207,0.988,2.207,2.207c0,1.219-0.988,2.206-2.207,2.206
					h-3.531C38.203,24.786,37.215,23.799,37.215,22.58z"
          />
          <path
            d="M7.944,22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53C0.988,20.373,0,21.361,0,22.58c0,1.219,0.988,2.206,2.207,2.206
					h3.531C6.956,24.786,7.944,23.799,7.944,22.58z"
          />
          <path
            d="M32.928,32.93c0.862-0.861,2.26-0.861,3.121,0l2.497,2.497c0.862,0.86,0.862,2.259,0,3.12s-2.259,0.861-3.121,0
					l-2.497-2.497C32.066,35.188,32.066,33.791,32.928,32.93z"
          />
          <path
            d="M12.231,12.231c0.862-0.862,0.862-2.259,0-3.121L9.734,6.614c-0.862-0.862-2.259-0.862-3.121,0
					c-0.862,0.861-0.862,2.259,0,3.12l2.497,2.497C9.972,13.094,11.369,13.094,12.231,12.231z"
          />
        </svg>

        <svg id="lua" x="0px" y="0px" viewBox="0 0 482.72 482.72">
          <path
            d="M463.367,326.16c-29.955,13.631-62.497,20.644-95.408,20.56c-128.072-0.141-231.859-103.928-232-232
			c-0.089-32.91,6.918-65.452,20.544-95.408L165.303,0l-19.344,8.704C57.159,48.811,0.073,137.201,0.041,234.638
			C-0.004,371.604,110.992,482.675,247.959,482.72c97.472-0.063,185.883-57.174,226.016-146l8.704-19.36L463.367,326.16z
			 M361.974,436.785C250.394,499.772,108.88,460.38,45.893,348.8S22.299,95.707,133.879,32.72c-9.274,26.342-13.981,54.074-13.92,82
			c0.159,136.901,111.099,247.841,248,248c27.926,0.061,55.658-4.646,82-13.92C429.189,385.593,398.767,416.016,361.974,436.785z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Nigth;
