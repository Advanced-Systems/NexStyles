using namespace System.IO

Push-Location -Path $([Path]::GetDirectoryName($PSScriptRoot))

$LocalConfigFiles = @(
  ".vscode/"
)

Write-Host "(1/2) Cleanup build artifacts" -ForegroundColor Yellow
$BuildArtifacts = Get-Content -Path ".gitignore" | Where-Object { $_ -notin $LocalConfigFiles }
$BuildArtifacts | Remove-Item -Recurse -Force

Write-Host "(2/2) Clean local cache" -ForegroundColor Yellow
yarn cache clean

Pop-Location
