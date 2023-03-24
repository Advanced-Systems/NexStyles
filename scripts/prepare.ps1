using namespace System.IO

Push-Location -Path $([Path]::GetDirectoryName($PSScriptRoot))

Write-Host "(1/2) Configure commit message template locally" -ForegroundColor Yellow
git config --local commit.template ".gitmessage"

Write-Host "(2/2) Install Git hooks" -ForegroundColor Yellow
husky install | Out-Null

Pop-Location
