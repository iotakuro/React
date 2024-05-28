import { useState } from "react";

let initialShapes = [
    { id: 0, type: 'circle', x: 150, y: 100},
    { id: 1, type: 'square', x: 250, y: 100},
    { id: 2, type: 'circle', x: 350, y: 100}
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                return shape;
            } else {
                return {
                    ...shape,
                    y: shape.y + 50
                }
            }
        });
        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                Clique aqui e as bola vai cair!
            </button>
            {shapes.map(shape => (
                <div 
                    key={shape.id}
                    style={{
                        background: 'green',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20
                    }} />
            ))}
        </>
    )
}
//Código feito com auxilio do aluno José Victor//