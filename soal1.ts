// Bubble Short
function bubbleSort(arr: number[]): number[] {
    const len: number = arr.length;
    let swapped: boolean;
    
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                const temp: number = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

let nilaiMahasiswa: number[] = [80, 65, 90, 75, 85, 70, 95, 60];
const nilaiTerurut: number[] = bubbleSort(nilaiMahasiswa.slice()); // Salin array untuk menjaga nilaiMahasiswa tetap tidak terurut

console.log("nilai Terurut =", nilaiTerurut);
