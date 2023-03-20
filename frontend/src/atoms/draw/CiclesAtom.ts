import { atom } from 'recoil';

export const CirclesState = atom({
    key: 'Circles',
    default: [
        // TODO: default値を作成
        // TODO: backendから取得するようにする
        {
            "x": 10,
            "y": 65,
        },
        {
            "x": 30,
            "y": 65,
        },
        {
            "x": 34,
            "y": 65,
        },
        {
            "x": 34,
            "y": 73,
        },
        {
            "x": 34,
            "y": 81,
        },
        {
            "x": 34,
            "y": 89,
        },
        {
            "x": 38,
            "y": 65,
        },
        {
            "x": 42,
            "y": 65,
        },
        {
            "x": 50,
            "y": 70,
        },
        {
            "x": 80,
            "y": 65,
        },
        {
            "x": 26,
            "y": 65,
        },
    ],
});
