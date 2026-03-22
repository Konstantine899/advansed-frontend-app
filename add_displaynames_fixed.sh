#!/bin/bash

echo "Adding displayName to components..."

# Обрабатываем файлы с экспортом компонентов
find src -name "*.tsx" -type f | while read file; do
  # Пропускаем storybook и test файлы
  if [[ "$file" == *".stories.tsx" || "$file" == *".test.tsx" ]]; then
    continue
  fi
  
  # Ищем экспорт компонентов
  if grep -q "export const.*=.*memo\|export const.*:.*FC\|export const.*function\|export const.*=.*forwardRef" "$file"; then
    # Извлекаем имя компонента
    component_name=$(grep "export const" "$file" | head -1 | sed -E 's/.*export const ([A-Za-z0-9_]+).*/\1/')
    
    # Проверяем, что имя извлеклось корректно и начинается с большой буквы
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
