$files = Get-ChildItem -Path "e:\programing\Projects\shatab.eg\shatab" -Recurse -Include *.js,*.jsx | Where-Object { $_.FullName -notmatch "node_modules" }

$count = 0
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match "prisma\.user") {
        $newContent = $content -replace "prisma\.user", "prisma.User"
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Fixed: $($file.FullName)"
        $count++
    }
}

Write-Host "`nTotal files fixed: $count"
