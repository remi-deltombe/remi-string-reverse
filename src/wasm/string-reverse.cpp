#include <emscripten.h>


int main() {
    return 1;
}

extern "C" {
    int EMSCRIPTEN_KEEPALIVE stringReverse(int length, char * input) {
        for(int i=0; i<length/2; ++i) {
            char tmp = input[i];
            input[i] = input[length-1-i];
            input[length-1-i] = tmp;
        }
        return 2;
    }
}