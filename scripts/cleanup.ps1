Push-Location -Path $(git rev-parse --show-toplevel)

$LocalConfigFiles = @(
  ".vscode/"
)

Write-Host "(1/2) Cleanup build artifacts" -ForegroundColor Yellow
$BuildArtifacts = Get-Content -Path ".gitignore" | Where-Object { $_ -notin $LocalConfigFiles }
$BuildArtifacts | Remove-Item -Recurse -Force

Write-Host "(2/2) Clean local cache" -ForegroundColor Yellow
yarn cache clean

Pop-Location
