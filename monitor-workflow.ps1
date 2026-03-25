# Workflow Monitoring Script

Write-Host "GitHub Actions Diagnostic Tool" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# Check current branch and commits
Write-Host "Current Branch: " -NoNewline; git branch --show-current
Write-Host "Last Commit: " -NoNewline; git log --oneline -1
Write-Host ""

# Check gh-pages status
Write-Host "gh-pages branch status:" -ForegroundColor Cyan
git fetch origin gh-pages
$ghPagesLog = git log --oneline origin/gh-pages -1
Write-Host "Latest commit: $ghPagesLog"
Write-Host ""

# Diagnostic information
Write-Host "Diagnostic Info:" -ForegroundColor Yellow
Write-Host "- Repository: Konstantine899/advansed-frontend-app"
Write-Host "- Visibility: Public"
Write-Host "- Workflow files:"
Get-ChildItem .github/workflows/*.yml | ForEach-Object { Write-Host "  - $($_.Name)" }
Write-Host ""

Write-Host "Next steps:" -ForegroundColor Green
Write-Host "1. Check Actions tab: https://github.com/Konstantine899/advansed-frontend-app/actions"
Write-Host "2. If no workflows running, check Settings -> Actions"
Write-Host "3. Enable Actions if disabled"
Write-Host "4. Check workflow file syntax"
Write-Host ""

Write-Host "Expected behavior:" -ForegroundColor Blue
Write-Host "- Basic test workflow should run immediately after push"
Write-Host "- Deploy workflow should run on push to master"
Write-Host "- gh-pages should update after successful deploy"
