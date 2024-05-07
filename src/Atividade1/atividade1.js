import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

export default function Atividade1() {
    return (
        <>
        <Link to="/">home</Link>
        <h1>Atividade 01</h1>
        <Relogio/>
        <Letreiro/>
        </>
    );
}