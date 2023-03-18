import React, {DragEvent} from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const Draw: React.FC = () => {

    let x1 = 10
    let y1 = 10

    return (
        <div>
            <h2>Draw</h2>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Circle
                        x={x1}
                        y={y1}
                        radius={10}
                        fill="black"
                        draggable
                        onDragEnd={(e: DragEvent<HTMLDivElement>) => {
                            x1 = e.target.attrs.x
                            y1 = e.target.attrs.y
                        }}
                    />
                </Layer>
            </Stage>
        </div>
    );
};

export default Draw;
