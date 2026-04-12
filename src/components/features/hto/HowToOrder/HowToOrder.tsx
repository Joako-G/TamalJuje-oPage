import { BagOrderSvg } from "../../../icons/BagOrderSvg";
import { KnifeSvg } from "../../../icons/KnifeSvg";
import { SendSvg } from "../../../icons/SendSvg";
import { TouchSvg } from "../../../icons/TouchSvg";
import { HtoHeader } from "../HtoHeader/HtoHeader";
import { HtoInfo } from "../HtoInfo/HtoInfo";
import { HtoStep } from "../HtoStep/HtoStep";


export function HowToOrder() {
    return (
        <div className="container pb-5 px-4 px-lg-0">
            <HtoHeader />
            <div className='row justify-content-center g-4 mb-5'>
                <div className="col-12 col-md-6 col-lg-3">
                    <HtoStep step={1} title="Eleguí tu comida" text="Explorá nuestro menú y seleccioná los platos que quieras pedir." >
                        <KnifeSvg />
                    </HtoStep>
                </div>
                <div className="col-12 col-md-6 col-lg-3">

                    <HtoStep
                        step={2}
                        title="Hacé tu pedido por WhatsApp"
                        text="Tocá el botón en cualquier plato para comenzar tu pedido." >
                        <TouchSvg />
                    </HtoStep>

                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <HtoStep
                        step={3}
                        title="Confirmá tu pedido"
                        text="Enviá tu pedido por WhatsApp y aguardá confirmación. Puede requerirse pago previo por transferencia." >
                        <SendSvg />
                    </HtoStep>
                </div>


                <div className="col-12 col-md-6 col-lg-3">
                    <HtoStep
                        step={4}
                        title="Retirá en el local"
                        text="Pasá a buscar tu pedido en el horario acordado. Tu comida estará lista para retirar." >
                        <BagOrderSvg />
                    </HtoStep>
                </div>

            </div>
            <HtoInfo />
        </div>
    )
}