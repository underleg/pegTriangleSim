
////////////////////////////////////////////////////////////
// gravity = 0.04
// x_dampener = 0.5
// y_dampener = 0.5
// dxLim = 0.02
////////////////////////////////////////////////////////////

//Counts: (0)55 (1)89 (2)147 (3)161 (4)83 (5)74  = 609

let ballRecords = [
    // [0]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.822,
        bounceRecord: [1, 2, 7, 4],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, 1, 1]
    },
    // [1]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.154,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, 1]
    },
    // [2]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.85,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, -1, -1, 1, 1, -1, 1, 1, 1]
    },
    // [3]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.146,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [4]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.306,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [5]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.29,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [6]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.486,
        bounceRecord: [1, 6, 9],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [7]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.486,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [8]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.046,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [9]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.466,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [10]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.478,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [11]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.04,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, -1, 1]
    },
    // [12]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.16,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [13]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.472,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [14]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.472,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [15]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.152,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [16]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.248,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [17]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.642,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [18]
    {
        prize: 3,
        numPegs: 3,
        startX: 262.772,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [19]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.606,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [20]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.91,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [21]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.616,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [22]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.298,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [23]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.42,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [24]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.296,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [25]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.294,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [26]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.712,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [27]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.39,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [28]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.568,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [29]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.43,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [30]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.366,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [31]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.4,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [32]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.598,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, 1, -1, 1]
    },
    // [33]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.35,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [34]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.374,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [35]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.898,
        bounceRecord: [1, 3, 6, 13, 8],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, 1, 1]
    },
    // [36]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.5,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [37]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.644,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [38]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.058,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [39]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.342,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [-1, -1, 1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [40]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.982,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [41]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.984,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [42]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.012,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [43]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.492,
        bounceRecord: [1, 6, 9, 13, 12],
        randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [44]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.492,
        bounceRecord: [1, 6, 9, 13, 12],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [45]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.588,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [46]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.472,
        bounceRecord: [1, 2, 9, 6],
        randomDirections: [-1, -1, 1, -1, 1, 1, -1, 1, 1, 1]
    },
    // [47]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.472,
        bounceRecord: [1, 2, 9, 6],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [48]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.478,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [49]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.002,
        bounceRecord: [1, 2, 4, 13, 9, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [50]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.2,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [51]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.2,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [52]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.864,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [53]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.466,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [54]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.452,
        bounceRecord: [1, 6, 3, 6, 9],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [55]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.654,
        bounceRecord: [1, 3, 5, 4, 13, 8, 13],
        randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [56]
    {
        prize: 3,
        numPegs: 3,
        startX: 262.774,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [57]
    {
        prize: 5,
        numPegs: 6,
        startX: 263.444,
        bounceRecord: [1, 2, 9, 6, 9, 14],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [58]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.556,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [59]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.622,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [60]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.892,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [61]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.606,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [62]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.56,
        bounceRecord: [1, 4, 13, 8],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [63]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.56,
        bounceRecord: [1, 4, 13, 8],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [64]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.706,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [65]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.866,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [66]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.866,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [67]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.09,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [68]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.718,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [69]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.72,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [70]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.242,
        bounceRecord: [1, 2, 5, 4, 13],
        randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [71]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.214,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [1, 1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [72]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.914,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [73]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.42,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [74]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.652,
        bounceRecord: [1, 3, 5, 4, 13, 12],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [75]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.572,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [76]
    {
        prize: 1,
        numPegs: 5,
        startX: 265.702,
        bounceRecord: [1, 3, 5, 12, 11],
        randomDirections: [-1, -1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [77]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.884,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [78]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.366,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [79]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.67,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [80]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.364,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [81]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.5,
        bounceRecord: [1, 6, 9, 13],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [82]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.5,
        bounceRecord: [1, 2, 3, 8],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [83]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.9,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [84]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.996,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [85]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.19,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [86]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.22,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [87]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.978,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [88]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.918,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [89]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.292,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [90]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.632,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [91]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.46,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [92]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.2,
        bounceRecord: [1, 2, 5, 4, 13],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [93]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.646,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [94]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.944,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [95]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.056,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [96]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.764,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [97]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.72,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [98]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.802,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [99]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.268,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [100]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.9,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [101]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.436,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [102]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.436,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [103]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.97,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [104]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.41,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [105]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.536,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [106]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.538,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [107]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.462,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [108]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.464,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [109]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.686,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [110]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.454,
        bounceRecord: [1, 6, 3, 6, 9],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [111]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.548,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [-1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [112]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.29,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [-1, -1, -1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [113]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.494,
        bounceRecord: [1, 6, 9, 13, 12],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [114]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.642,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [115]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.246,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [116]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.266,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [117]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.036,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [118]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.194,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [119]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.108,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [120]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.606,
        bounceRecord: [1, 3, 8],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [121]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.092,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [122]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.908,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [123]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.604,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [124]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.204,
        bounceRecord: [1, 2, 5, 12, 8],
        randomDirections: [-1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [125]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.316,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [126]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.962,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [127]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.758,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [128]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.768,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [129]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.006,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [130]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.214,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [-1, -1, 1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [131]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.136,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [132]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.906,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [133]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.102,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [134]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.972,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [135]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.962,
        bounceRecord: [1, 3, 10, 14, 13],
        randomDirections: [-1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [136]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.736,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [137]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.368,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [138]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.218,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [139]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.218,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [140]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.44,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [141]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.57,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [142]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.52,
        bounceRecord: [1, 3, 8, 4, 12],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, 1, 1, 1]
    },
    // [143]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.432,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [144]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.034,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [145]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.956,
        bounceRecord: [1, 2, 4, 13, 14],
        randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [146]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.898,
        bounceRecord: [1, 3, 6, 13, 8],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [147]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.892,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [148]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.76,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [149]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.718,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [150]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.09,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [151]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.91,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [152]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.632,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [153]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.596,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [154]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.786,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [155]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.588,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, -1, -1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [156]
    {
        prize: 3,
        numPegs: 7,
        startX: 262.98,
        bounceRecord: [1, 2, 4, 8, 9, 13, 12],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [157]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.878,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, -1, 1]
    },
    // [158]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.34,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, -1, -1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [159]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.062,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [160]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.756,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [161]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.756,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, -1]
    },
    // [162]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.662,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, -1]
    },
    // [163]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.982,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [164]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.764,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [165]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.954,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [166]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.054,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, 1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [167]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.686,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [-1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [168]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.564,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [169]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.39,
        bounceRecord: [1, 2, 9, 13, 14],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [170]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.97,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [171]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.75,
        bounceRecord: [1, 3, 5, 14],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [172]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.75,
        bounceRecord: [1, 3, 5, 14],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [173]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.036,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [174]
    {
        prize: 5,
        numPegs: 6,
        startX: 263.448,
        bounceRecord: [1, 2, 9, 6, 9, 14],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, 1]
    },
    // [175]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.308,
        bounceRecord: [1, 2, 5, 14, 13],
        randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [176]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.99,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [177]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.542,
        bounceRecord: [1, 3, 8, 4, 8, 12, 11],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [178]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.286,
        bounceRecord: [1, 2, 5, 14, 13],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [179]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.768,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [180]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.566,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [181]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.566,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [182]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.006,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [183]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.074,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, 1, 1]
    },
    // [184]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.786,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [185]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.444,
        bounceRecord: [1, 6, 3, 6, 9, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [186]
    {
        prize: 1,
        numPegs: 4,
        startX: 265.51,
        bounceRecord: [1, 3, 8, 7],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [187]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.508,
        bounceRecord: [1, 3, 2, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [188]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.83,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [189]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.892,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, -1, -1]
    },
    // [190]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.108,
        bounceRecord: [1, 2, 4, 7, 8],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [191]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.774,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [192]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.172,
        bounceRecord: [1, 2, 5, 12, 7],
        randomDirections: [1, 1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [193]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.092,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [194]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.006,
        bounceRecord: [1, 2, 4, 5, 12, 11],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [195]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.756,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [196]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.236,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [197]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.268,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [198]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.228,
        bounceRecord: [1, 2, 9, 14, 15],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [199]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.41,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [200]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.046,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [201]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.174,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [202]
    {
        prize: 6,
        numPegs: 5,
        startX: 263.278,
        bounceRecord: [1, 2, 5, 14, 15],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [203]
    {
        prize: 6,
        numPegs: 5,
        startX: 263.278,
        bounceRecord: [1, 2, 5, 14, 15],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [204]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.938,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [205]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.93,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [206]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.852,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [207]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.178,
        bounceRecord: [1, 2, 5, 12, 8, 12],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [208]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.412,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [209]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.902,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [210]
    {
        prize: 4,
        numPegs: 7,
        startX: 265.82,
        bounceRecord: [1, 3, 5, 9, 10, 14, 13],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [211]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.356,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [212]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.344,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [213]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.526,
        bounceRecord: [1, 3, 8, 4],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [214]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.7,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [215]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.148,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [216]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.382,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, 1, -1, -1, 1, 1, -1, 1, 1, 1]
    },
    // [217]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.604,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [218]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.694,
        bounceRecord: [1, 3, 5, 8, 7],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [219]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.8,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [220]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.284,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [221]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.142,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [222]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.306,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [223]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.722,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [224]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.504,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [-1, -1, 1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [225]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.644,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [226]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.48,
        bounceRecord: [1, 6, 9],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [227]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.548,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [228]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.164,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [229]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.862,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [230]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.016,
        bounceRecord: [1, 3, 6, 13, 9],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [231]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.454,
        bounceRecord: [1, 6, 3, 6, 9],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [232]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.812,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [233]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.91,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [234]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.196,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [235]
    {
        prize: 4,
        numPegs: 3,
        startX: 262.514,
        bounceRecord: [1, 4, 8],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [236]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.97,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [237]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.478,
        bounceRecord: [1, 2, 9, 6, 14, 13],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [238]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.358,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [239]
    {
        prize: 3,
        numPegs: 4,
        startX: 266.024,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [240]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.49,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [241]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.534,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [242]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.864,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [243]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.398,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [244]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.956,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [245]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.722,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [246]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.108,
        bounceRecord: [1, 2, 4, 7, 8],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [247]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.102,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [248]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.86,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [249]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.946,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [250]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.54,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [251]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.3,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [252]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.212,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [253]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.57,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [254]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.848,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [255]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.548,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [256]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.212,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [257]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.01,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [258]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.288,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [259]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.91,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [260]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.034,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [261]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.204,
        bounceRecord: [1, 2, 5, 12, 8],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [262]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.418,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [263]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.128,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [264]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.638,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [265]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.97,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [266]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.036,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [267]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.266,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [268]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.624,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [269]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.358,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [270]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.296,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [271]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.73,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [272]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.108,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [273]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.736,
        bounceRecord: [1, 3, 5, 9, 13],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [274]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.716,
        bounceRecord: [1, 3, 5, 8, 7],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [275]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.018,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [276]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.758,
        bounceRecord: [1, 3, 5, 6, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [277]
    {
        prize: 4,
        numPegs: 6,
        startX: 263,
        bounceRecord: [1, 2, 4, 13, 9, 13],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [278]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.332,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [279]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.286,
        bounceRecord: [1, 2, 5, 14, 13],
        randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [280]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.146,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [281]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.356,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [282]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.082,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [283]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.64,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [284]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.702,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [285]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.944,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [286]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.66,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, -1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [287]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.784,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [288]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.794,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [289]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.796,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [290]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.606,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [291]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.748,
        bounceRecord: [1, 3, 5, 9, 13, 12],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [292]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.394,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [293]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.124,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [294]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.83,
        bounceRecord: [1, 3, 5, 6, 13],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [295]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.21,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [296]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.666,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [297]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.592,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [298]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.142,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [299]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.454,
        bounceRecord: [1, 6, 3, 6, 9],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [300]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.364,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [301]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.944,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [302]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.014,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [303]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.776,
        bounceRecord: [1, 2, 7, 12, 11],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [304]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.23,
        bounceRecord: [1, 2, 14, 9, 14],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [305]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.044,
        bounceRecord: [1, 3, 6, 13, 12],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [306]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.01,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [307]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.126,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [308]
    {
        prize: 1,
        numPegs: 5,
        startX: 265.702,
        bounceRecord: [1, 3, 5, 12, 11],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [309]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.9,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [310]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.19,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [311]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.352,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [312]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.9,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [313]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.532,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [314]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.552,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [315]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.468,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [316]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.086,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [317]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.742,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [318]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.22,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [319]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.842,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [320]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.93,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [321]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.054,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [322]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.288,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [323]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.544,
        bounceRecord: [1, 3, 8, 4, 8, 12, 11],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [324]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.494,
        bounceRecord: [1, 2, 3, 8, 12],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [325]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.506,
        bounceRecord: [1, 3, 2, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [326]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.098,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [1, 1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [327]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.078,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [328]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.078,
        bounceRecord: [1, 2, 4, 13, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [329]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.494,
        bounceRecord: [1, 6, 9, 13, 12],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [330]
    {
        prize: 3,
        numPegs: 6,
        startX: 262.556,
        bounceRecord: [1, 4, 2, 4, 8, 13],
        randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [331]
    {
        prize: 4,
        numPegs: 6,
        startX: 263,
        bounceRecord: [1, 2, 4, 13, 9, 13],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [332]
    {
        prize: 6,
        numPegs: 5,
        startX: 263.298,
        bounceRecord: [1, 2, 5, 14, 15],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [333]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.128,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [334]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.226,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [335]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.214,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [336]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.436,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [337]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.292,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [338]
    {
        prize: 4,
        numPegs: 7,
        startX: 265.82,
        bounceRecord: [1, 3, 5, 9, 10, 14, 13],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [339]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.766,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [1, 1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [340]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.412,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [341]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.556,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [342]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.786,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [343]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.692,
        bounceRecord: [1, 3, 5, 12, 13],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [344]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.922,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [345]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.378,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [346]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.902,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [347]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.088,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [348]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.878,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [349]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.916,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [350]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.57,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [351]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.062,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [352]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.282,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [353]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.808,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [354]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.028,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [355]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.644,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [356]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.618,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [357]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.158,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [358]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.228,
        bounceRecord: [1, 2, 9, 14, 15],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [359]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.854,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [360]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.046,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [361]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.354,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [362]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.126,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [363]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.714,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [364]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.566,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [365]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.504,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [366]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.914,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [367]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.714,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [368]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.828,
        bounceRecord: [1, 2, 7, 4, 12, 11],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [369]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.432,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [370]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.826,
        bounceRecord: [1, 3, 5, 14],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [371]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.634,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [372]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.708,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [373]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.574,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [374]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.236,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [375]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.382,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [376]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.906,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [377]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.484,
        bounceRecord: [1, 6, 9],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [378]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.464,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [379]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.842,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [380]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.284,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [381]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.486,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [382]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.728,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [383]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.82,
        bounceRecord: [1, 2, 7, 4],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [384]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.358,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [385]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.9,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [386]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.628,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [387]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.198,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [388]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.168,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [389]
    {
        prize: 4,
        numPegs: 3,
        startX: 262.516,
        bounceRecord: [1, 4, 8],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [390]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.5,
        bounceRecord: [1, 6, 9, 13],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [391]
    {
        prize: 4,
        numPegs: 3,
        startX: 262.514,
        bounceRecord: [1, 4, 8],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [392]
    {
        prize: 4,
        numPegs: 4,
        startX: 262.942,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [393]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.63,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [394]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.862,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [395]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.478,
        bounceRecord: [1, 2, 9, 6, 14, 13],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [396]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.548,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [397]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.784,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [398]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.746,
        bounceRecord: [1, 3, 5, 9, 13],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [399]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.21,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [400]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.254,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [401]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.548,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [402]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.382,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [403]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.38,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [404]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.464,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [405]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.634,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [406]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.088,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [407]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.606,
        bounceRecord: [1, 3, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [408]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.362,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [409]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.006,
        bounceRecord: [1, 2, 4, 5, 12, 11],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [410]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.068,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [411]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.83,
        bounceRecord: [1, 2, 7, 4, 12, 11],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [412]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.992,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [413]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.216,
        bounceRecord: [1, 2, 5, 9, 14],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [414]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.9,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [415]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.228,
        bounceRecord: [1, 2, 9, 14, 15],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [416]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.032,
        bounceRecord: [1, 3, 6, 9, 14, 13],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [417]
    {
        prize: 3,
        numPegs: 4,
        startX: 266.004,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [418]
    {
        prize: 1,
        numPegs: 5,
        startX: 265.702,
        bounceRecord: [1, 3, 5, 12, 11],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [419]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.256,
        bounceRecord: [1, 2, 5, 8],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [420]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.49,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [421]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.054,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [422]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.31,
        bounceRecord: [1, 2, 5, 14, 13],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [423]
    {
        prize: 4,
        numPegs: 4,
        startX: 262.998,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [424]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.418,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [425]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.822,
        bounceRecord: [1, 3, 5, 14, 9, 14],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [426]
    {
        prize: 3,
        numPegs: 6,
        startX: 266,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [1, 1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [427]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.096,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [428]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.506,
        bounceRecord: [1, 3, 2, 9, 14],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [429]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.918,
        bounceRecord: [1, 3, 6, 9, 14, 13],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [430]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.316,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [431]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.922,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [432]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.206,
        bounceRecord: [1, 2, 5, 8],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [433]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.776,
        bounceRecord: [1, 2, 7, 12, 11],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [434]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.16,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [435]
    {
        prize: 6,
        numPegs: 5,
        startX: 263.278,
        bounceRecord: [1, 2, 5, 14, 15],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [436]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.81,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [437]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.078,
        bounceRecord: [1, 2, 4, 13, 9],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [438]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.394,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [439]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.18,
        bounceRecord: [1, 3, 10, 6],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [440]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.156,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [441]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.852,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [442]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.376,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [443]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.04,
        bounceRecord: [1, 3, 6, 9, 10],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [444]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.464,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [445]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.366,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [446]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.204,
        bounceRecord: [1, 2, 5, 12, 8],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [447]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.38,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [448]
    {
        prize: 3,
        numPegs: 3,
        startX: 262.772,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [449]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.57,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [450]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.542,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [451]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.78,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [452]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.538,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [453]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.282,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [454]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.546,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [455]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.266,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [456]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.288,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [457]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.264,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [458]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.246,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [459]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.5,
        bounceRecord: [1, 2, 3, 8],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [460]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.084,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [461]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.82,
        bounceRecord: [1, 2, 7, 4],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [462]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.476,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [463]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.71,
        bounceRecord: [1, 3, 5, 12],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [464]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.644,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [465]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.794,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [466]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.766,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [467]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.774,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [468]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.528,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [469]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.728,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [470]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.912,
        bounceRecord: [1, 2, 4, 7, 8],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [471]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.262,
        bounceRecord: [1, 2, 5, 8, 12, 11],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [472]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.296,
        bounceRecord: [1, 2, 5, 14, 10],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [473]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.006,
        bounceRecord: [1, 2, 4, 5, 12, 11],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [474]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.87,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [475]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.976,
        bounceRecord: [1, 3, 6, 5, 14, 9],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [476]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.464,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [477]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.918,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [478]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.088,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [479]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.742,
        bounceRecord: [1, 3, 5, 9, 8],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [480]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.65,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, 1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [481]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.56,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [482]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.01,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [483]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.272,
        bounceRecord: [1, 2, 5, 8],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [484]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.66,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [485]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.068,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [486]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.87,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [487]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.22,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [488]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.588,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [489]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.316,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [490]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.648,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [491]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.42,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [492]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.208,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [493]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.15,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [494]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.82,
        bounceRecord: [1, 2, 7, 4],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [495]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.482,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [496]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.394,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [497]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.094,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [498]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.568,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [499]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.958,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [500]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.904,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [501]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.526,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [502]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.378,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [503]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.592,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [504]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.72,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [505]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.98,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [506]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.684,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [507]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.286,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [508]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.906,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [509]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.596,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [510]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.928,
        bounceRecord: [1, 2, 4, 11, 7, 11],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [511]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.354,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [512]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.652,
        bounceRecord: [1, 3, 5, 4, 13, 12],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [513]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.474,
        bounceRecord: [1, 2, 9, 6],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [514]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.648,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [515]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.42,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [516]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.918,
        bounceRecord: [1, 3, 6, 9, 14, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [517]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.294,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [518]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.534,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [519]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.682,
        bounceRecord: [1, 3, 5, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [520]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.7,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [521]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.202,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [522]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.852,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [523]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.062,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [524]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.254,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [525]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.764,
        bounceRecord: [1, 3, 5, 8, 9],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [526]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.282,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [527]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.228,
        bounceRecord: [1, 2, 9, 14, 15],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [528]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.604,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [529]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.286,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [530]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.234,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [531]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.236,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [532]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.126,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [533]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.628,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [534]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.592,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [535]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.796,
        bounceRecord: [1, 3, 5, 14, 9],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [536]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.528,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [537]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.72,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [538]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.962,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [539]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.98,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [540]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.492,
        bounceRecord: [1, 6, 9, 13, 12],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [541]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.916,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [542]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.17,
        bounceRecord: [1, 2, 5, 4, 13],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [543]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.806,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [544]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.808,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [545]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.634,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [546]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.052,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [547]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.396,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [548]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.2,
        bounceRecord: [1, 2, 5, 4, 13],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [549]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.308,
        bounceRecord: [1, 2, 5, 14, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [550]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.262,
        bounceRecord: [1, 2, 5, 8, 12, 11],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [551]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.922,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [552]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.5,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [553]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.806,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [554]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.642,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [555]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.1,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [556]
    {
        prize: 4,
        numPegs: 4,
        startX: 262.996,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [557]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.39,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [558]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.086,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [559]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.008,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [560]
    {
        prize: 5,
        numPegs: 6,
        startX: 263.294,
        bounceRecord: [1, 2, 5, 14, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [561]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.126,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [562]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.382,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [563]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.778,
        bounceRecord: [1, 3, 8, 9],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [564]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.822,
        bounceRecord: [1, 3, 5, 14, 9, 14],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [565]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.018,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [566]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.032,
        bounceRecord: [1, 3, 6, 9, 14, 13],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [567]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.962,
        bounceRecord: [1, 3, 10, 14, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [568]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.536,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [569]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.42,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [570]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.092,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [571]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.416,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [572]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.008,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [573]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.902,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [574]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.352,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [575]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.882,
        bounceRecord: [1, 2, 4, 11, 7, 11],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [576]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.44,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [577]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.058,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [578]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.646,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [579]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.732,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [580]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.398,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [581]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.284,
        bounceRecord: [1, 2, 5, 9, 10],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [582]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.206,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [583]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.736,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [584]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.236,
        bounceRecord: [1, 2, 5, 9, 8],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [585]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.642,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [586]
    {
        prize: 3,
        numPegs: 7,
        startX: 263.162,
        bounceRecord: [1, 2, 4, 8, 9, 13, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [587]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.788,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [588]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.302,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [589]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.906,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [590]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.266,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [591]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.618,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [592]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.904,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [593]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.014,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [594]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.532,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [595]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.172,
        bounceRecord: [1, 2, 5, 12, 7],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [596]
    {
        prize: 3,
        numPegs: 7,
        startX: 262.982,
        bounceRecord: [1, 2, 4, 8, 9, 13, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [597]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.228,
        bounceRecord: [1, 2, 9, 14, 15],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [598]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.292,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [599]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.38,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [600]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.712,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [601]
    {
        prize: 4,
        numPegs: 4,
        startX: 262.996,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [602]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.068,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [603]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.194,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [604]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.434,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [605]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.014,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [606]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.426,
        bounceRecord: [1, 2, 9, 14, 13],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [607]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.89,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [608]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.36,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    }
];