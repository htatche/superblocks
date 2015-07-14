var data = {
    blocks: [
        {
            name: 'pyramid',
            color: 'green',
            pivot: {
                x: 1,
                y: 1
            },
            anchor: {
                x: 0.5,
                y: 0.5
            },
            patterns: [
                {
                    angle: 0,
                    positions: [
                        [-1, 0], [0, 0], [1, 0], [0, -1]
                    ]
                },
                {
                    angle: 90,
                    positions: [
                        [0, 0], [0, -1], [0, 1], [1, 0]
                    ]
                },
                {
                    angle: 180,
                    positions: [
                        [-1, 0], [0, 0], [1, 0], [0, 1]
                    ]
                },
                {
                    angle: 270,
                    positions: [
                        [0, 0], [0, -1], [0, 1], [-1, 0]
                    ]
                }
            ]
        },
        {
            name: 'column',
            color: 'yellow',
            pivot: {
                x: 2,
                y: 0
            },
            anchor: {
                x: 0,
                y: 1
            },
            patterns: [
                {
                    angle: 0,
                    positions: [
                        [-2, 0], [-1, 0], [0, 0], [1, 0]
                    ]
                },
                {
                    angle: 90,
                    positions: [
                        [0, -1], [0, 0], [0, 1], [0, 2]
                    ]
                },
                {
                    angle: 180,
                    positions: [
                        [1, 1], [0, 1], [-1, 1], [-2, 1]
                    ]
                },
                {
                    angle: 270,
                    positions: [
                        [-1, 2], [-1, 1], [-1, 0], [-1, -1]
                    ]
                }
                // {
                //     angle: 360,
                //     positions: [
                //         [-2, 0], [-1, 0], [0, 0], [1, 0]
                //     ]
                // }
            ]
        },
        // {
        //     name: 'cube',
        //     color: 'blue',
        //     pivot: {
        //         x: 1,
        //         y: 1
        //     },
        //     anchor: {
        //         x: 1,
        //         y: 0
        //     },
        //     patterns: [
        //         {
        //             angle: 0,
        //             positions: [
        //                 [0, 0], [0, -1], [1, -1], [1, 0]
        //             ]
        //         },
        //         {
        //             angle: 90,
        //             positions: [
        //                 [0, -1], [1, -1], [1, 0], [0, 0]
        //             ]
        //         },
        //         {
        //             angle: 180,
        //             positions: [
        //                 [1, -1], [0, -1], [0, 0], [0, 1]
        //             ]
        //         },
        //         {
        //             angle: 270,
        //             positions: [
        //                 [1, 0], [0, 0], [0, -1], [1, -1]
        //             ]
        //         }
        //     ]
        // }           
        {
            name: 'cube',
            color: 'blue',
            pivot: {
                x: 1,
                y: 1
            },
            anchor: {
                x: 0,
                y: 0
            },
            patterns: [
                {
                    angle: 0,
                    positions: [
                        [-1, 0], [-1, -1], [0, -1], [0, 0]
                    ]
                },
                {
                    angle: 90,
                    positions: [
                        [-1, -1], [0, -1], [0, 0], [-1, 0]
                    ]
                },
                {
                    angle: 180,
                    positions: [
                        [0, -1], [0, 0], [-1, 0], [-1, -1]
                    ]
                },
                {
                    angle: 270,
                    positions: [
                        [0, 0], [-1, 0], [-1, -1], [0, -1]
                    ]
                }
            ]
        }        
    ]
};

export default data;
