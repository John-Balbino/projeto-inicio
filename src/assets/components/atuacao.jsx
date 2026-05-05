
import foto1 from "../img/foto1.jpg";

export function Atuacao() {
  return (
    <section className="flex flex-col md:flex-row bg-black text-white border-t-2 border-amber-500 4">
      <div>
        <img src={foto1} alt="" className="h-120 " />
      </div>


      
      <div className="box-cards flex flex-col gap-4 items-center justify-center p-4
    ">
        <h2
          className="  text-[18px] text-center font-extrabold bg-linear-to-t from-amber-100 via-amber-500 to-amber-600 bg-clip-text 
                text-transparent w-full p-4"
        >
          Áreas de <br />
          atuação
        </h2>

        <div className="card text-[10px] w-30   p-2 bg-amber-700 flex flex-col items-center justify-center rounded-lg">
          <i class="fa-solid fa-gavel"></i>
          <h3>Direito Civil</h3>
          
        </div>
        <div className="card p-2 text-[10px] w-30  bg-amber-700 flex flex-col items-center justify-center rounded-lg">
          <i class="fa-solid fa-gavel"></i>
          <h3>Direito Penal</h3>
          
        </div>
        <div className="card p-2 text-[10px] w-30  bg-amber-700 flex flex-col items-center justify-center rounded-lg">
          <i class="fa-solid fa-gavel"></i>
          <h3>Direito Trabalhista</h3>
          
        </div>
      </div>
    </section>
  );
}
