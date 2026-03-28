import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.DiEladB3.js";function x(){const[a,s]=o.useState("idle"),[d,t]=o.useState(""),[m,f]=o.useState("");async function u(i){i.preventDefault(),s("loading"),t("");const n=i.currentTarget,r=new FormData(n),b={nombre:r.get("nombre"),email:r.get("email"),telefono:r.get("telefono"),tratamiento:r.get("tratamiento"),mensaje:r.get("mensaje")};try{const c=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}),l=await c.json();if(!c.ok){s("error"),t(l.error||"Error al enviar el formulario.");return}s("success"),f(l.message),n.reset()}catch{s("error"),t("Error de conexion. Contacta por telefono: (+34) 696 872 067")}}return e.jsxs("form",{onSubmit:u,style:{width:"100%"},children:[e.jsxs("div",{className:"cf-group",children:[e.jsx("label",{htmlFor:"nombre",className:"cf-label",children:"Nombre completo"}),e.jsx("input",{type:"text",id:"nombre",name:"nombre",required:!0,className:"cf-input",disabled:a==="loading"})]}),e.jsxs("div",{className:"cf-group",children:[e.jsx("label",{htmlFor:"email",className:"cf-label",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"cf-input",disabled:a==="loading"})]}),e.jsxs("div",{className:"cf-group",children:[e.jsx("label",{htmlFor:"telefono",className:"cf-label",children:"Telefono"}),e.jsx("input",{type:"tel",id:"telefono",name:"telefono",className:"cf-input",disabled:a==="loading"})]}),e.jsxs("div",{className:"cf-group",children:[e.jsx("label",{htmlFor:"tratamiento",className:"cf-label",children:"Tratamiento de interes"}),e.jsxs("select",{id:"tratamiento",name:"tratamiento",className:"cf-input",disabled:a==="loading",children:[e.jsx("option",{value:"",children:"Selecciona un tratamiento"}),e.jsx("option",{value:"cirugia-corporal",children:"Cirugia Corporal"}),e.jsx("option",{value:"cirugia-facial",children:"Cirugia Facial"}),e.jsx("option",{value:"medicina-estetica",children:"Medicina Estetica"}),e.jsx("option",{value:"otro",children:"Otro"})]})]}),e.jsxs("div",{className:"cf-group",children:[e.jsx("label",{htmlFor:"mensaje",className:"cf-label",children:"Mensaje"}),e.jsx("textarea",{id:"mensaje",name:"mensaje",rows:5,required:!0,className:"cf-input",disabled:a==="loading"})]}),a==="error"&&e.jsx("div",{className:"cf-message cf-message--error",children:d}),a==="success"&&e.jsx("div",{className:"cf-message cf-message--success",children:m}),e.jsx("button",{type:"submit",className:"cta-btn cf-submit",disabled:a==="loading",children:a==="loading"?"Enviando...":"Enviar consulta"}),e.jsx("style",{children:`
        .cf-group {
          margin-bottom: 1.5rem;
        }

        .cf-label {
          display: block;
          font-family: var(--font-sans, 'Outfit', sans-serif);
          font-weight: 400;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--text, #2c2927);
          margin-bottom: 0.5rem;
        }

        .cf-input {
          width: 100%;
          padding: 0.9rem 1rem;
          font-family: var(--font-sans, 'Outfit', sans-serif);
          font-weight: 300;
          font-size: 1rem;
          color: var(--text, #2c2927);
          background-color: var(--white, #ffffff);
          border: 1px solid rgba(142, 125, 106, 0.3);
          border-radius: 2px;
          transition: border-color 0.3s ease, background-color 0.3s ease;
          -webkit-appearance: none;
          box-sizing: border-box;
        }

        .cf-input:focus {
          outline: none;
          border-color: var(--bronze, #8e7d6a);
          background-color: var(--silk, #f4f1ee);
        }

        .cf-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        textarea.cf-input {
          resize: vertical;
        }

        .cf-message {
          padding: 1rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-sans, 'Outfit', sans-serif);
          font-weight: 300;
          font-size: 0.95rem;
          border-radius: 2px;
        }

        .cf-message--error {
          background-color: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        .cf-message--success {
          background-color: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .cf-submit {
          width: 100%;
          text-align: center;
          cursor: pointer;
        }

        .cf-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `})]})}export{x as default};
