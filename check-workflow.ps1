# PowerShell script to check GitHub Actions workflow status

Write-Host "GitHub Actions Status Check" -ForegroundColor Green
Write-Host "Repository: Konstantine899/advansed-frontend-app" -ForegroundColor Yellow
Write-Host ""

# Check local git status
Write-Host "Local Git Status:" -ForegroundColor Cyan
git status --short

Write-Host ""
Write-Host "Recent commits in master:" -ForegroundColor Cyan
git log --oneline -3

Write-Host ""
Write-Host "gh-pages branch status:" -ForegroundColor Cyan
git log --oneline origin/gh-pages -3

Write-Host ""
Write-Host "To check workflow status in browser:" -ForegroundColor Green
Write-Host "https://github.com/Konstantine899/advansed-frontend-app/actions" -ForegroundColor White

Write-Host ""
Write-Host "To check deployed site:" -ForegroundColor Green
Write-Host "https://konstantine899.github.io/advansed-frontend-app/" -ForegroundColor White

Write-Host ""
Write-Host "If workflow doesn't trigger, check:" -ForegroundColor Yellow
Write-Host "1. GitHub repository settings"
Write-Host "2. Workflow file permissions"
Write-Host "3. Branch protection rules"
Write-Host "4. GitHub Actions usage limits"