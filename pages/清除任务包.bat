:: Header
@echo off
echo Red Alert 2 Yuri's Revenge Missiong Cleaner V1.2
echo By Heli, July 2018
:: Am I in the setup folder?
if not exist gamemd.exe (
echo Error: gamemd.exe not found.
echo Please run this program in Red Alert 2 Yuri's Revenge's Setup Folder.
pause & exit
)

:: Confidel Cleaning
echo Warning: No Undo! Continue?
echo To exit, you can just close this window.
pause

echo Start Cleaning...

:: Clean map file
for %%i in (.,*.map) do if not "%%i" == "." (
del %%i
echo deleted %%i
)

:: Clean ra2md.csf
if exist ra2md.csf (
del ra2md.csf
echo deleted ra2md.csf
)

:: Clean ini file
if exist rulesmd.ini (
del rulesmd.ini
echo deleted rulesmd.ini
)
if exist artmd.ini (
del artmd.ini
echo deleted artmd.ini
)
if exist mapselmd.ini (
del mapselmd.ini
echo deleted mapselmd.ini
)
if exist battlemd.ini (
del battlemd.ini
echo deleted battlemd.ini
)
if exist missionmd.ini (
del missionmd.ini
echo deleted missionmd.ini
)
if exist evamd.ini (
del evamd.ini
echo deleted evamd.ini
)

:: Clean mix file
for %%i in (.,expand*.mix) do if not "%%i" == "." if not "%%i" == "expandmd01.mix" (
del %%i
echo deleted %%i
)

for %%i in (.,ecache*.mix) do if not "%%i" == "." (
del %%i
echo deleted %%i
)

:: Clean image file
for %%i in (.,*.pcx) do if not "%%i" == "." (
del %%i
echo deleted %%i
)
for %%i in (.,*.shp) do if not "%%i" == "." (
del %%i
echo deleted %%i
)
for %%i in (.,*.pal) do if not "%%i" == "." (
del %%i
echo deleted %%i
)
for %%i in (.,*.vxl) do if not "%%i" == "." (
del %%i
echo deleted %%i
)
for %%i in (.,*.hva) do if not "%%i" == "." (
del %%i
echo deleted %%i
)
for %%i in (.,*.ubn) do if not "%%i" == "." (
del %%i
echo deleted %%i
)

:: Done
echo Done.
pause & exit