#!/bin/bash

echo "Adding displayName to components..."

# Находим все файлы с экспортом компонентов через memo
find src -name "*.tsx" -type f | while read file; do
  # Проверяем, есть ли экспорт компонента через memo
  if grep -q "export const.*=.*memo" "$file"; then
    # Извлекаем имя компонента
    component_name=$(grep "export const" "$file" | head -1 | sed -E 's/.*export const ([A-Za-z0-9_]+).*=.*memo.*/\1/')
    
    # Проверяем, что имя извлеклось корректно
    if [[ ! -z "$component_name" && "$component_name" =~ ^[A-Z] ]]; then
      # Проверяем, нет ли уже displayName
      if ! grep -q "displayName" "$file"; then
        echo "Adding displayName to $component_name in $file"
        # Добавляем displayName в конец файла
        echo "" >> "$file"
        echo "${component_name}.displayName = '${component_name}';" >> "$file"
      fi
    fi
  fi
done

echo "Done!"
