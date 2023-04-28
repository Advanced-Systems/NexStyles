Push-Location -Path $(git rev-parse --show-toplevel)

Write-Host "(1/2) Update local Git settings" -ForegroundColor Yellow
git config --local commit.template ".gitmessage"
git config --local core.whitespace cr-at-eol

Write-Host "(2/2) Install Git hooks" -ForegroundColor Yellow
husky install | Out-Null

Pop-Location
