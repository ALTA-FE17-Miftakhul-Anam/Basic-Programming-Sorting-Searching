// Binary Search
interface Karyawan {
    id: number;
    nama: string;
}

const dataKaryawan: Karyawan[] = [
    { id: 101, nama: "Rani" },
    { id: 203, nama: "Andi" },
    { id: 305, nama: "Budi" },
    { id: 410, nama: "Cindy" },
    { id: 520, nama: "Dodi" },
    { id: 635, nama: "Eka" },
    { id: 742, nama: "Fani" },
];

const targetId: number = 305;

function binarySearchKaryawan(arr: Karyawan[], target: number): Karyawan | null {
    let left: number = 0;
    let right: number = arr.length - 1;

    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);

        if (arr[mid].id === target) {
            return arr[mid];
        } else if (arr[mid].id < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

const karyawan: Karyawan | null = binarySearchKaryawan(dataKaryawan, targetId);

console.log("karyawan =", karyawan);
