@echo off
setlocal enabledelayedexpansion

set "output_file=file_list.txt"

echo Memindai semua file dalam directory dan subdirectory...
echo Daftar file akan disimpan di: %output_file%
echo.

for /r %%i in (*) do (
    echo %%i >> "%output_file%"
)

echo.
echo Proses selesai! Total file ditemukan: 
find /c /v "" < "%output_file%"
echo Hasil disimpan di: %output_file%
pause