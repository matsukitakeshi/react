import React, {DragEvent} from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const Draw: React.FC = () => {

    type Align = {
        "x": number,
        "y": number,
    }

    let aligns = [
        // TODO: default値を作成
        // TODO: backendから取得するようにする
        {
            "x": 100,
            "y": 400,
        },
        {
            "x": 500,
            "y": 700,
        },
        {
            "x": 300,
            "y": 400,
        },
        {
            "x": 400,
            "y": 400,
        },
        {
            "x": 500,
            "y": 400,
        },
        {
            "x": 600,
            "y": 400,
        },
        {
            "x": 700,
            "y": 400,
        },
        {
            "x": 800,
            "y": 400,
        },
        {
            "x": 500,
            "y": 600,
        },
        {
            "x": 500,
            "y": 500,
        },
        {
            "x": 1100,
            "y": 500,
        },
    ]

    let circles = []

    for (let i = 0; i < 11; i++) {
        circles.push(
            <Circle
                x={aligns[i].x}
                y={aligns[i].y}
                radius={30}
                fill="black"
                draggable
                onDragEnd={(e: DragEvent<HTMLDivElement>) => {
                    aligns[i].x = e.target.attrs.x
                    aligns[i].y = e.target.attrs.y
                }}
                key={i}
            />
        )
    }

    return (
        <div>
            <h2>Draw</h2>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {circles}
                </Layer>
            </Stage>
        </div>
    );
};

export default Draw;
