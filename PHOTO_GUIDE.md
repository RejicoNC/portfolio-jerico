# 📸 Comment ajouter votre photo de profil

## Étapes pour remplacer la photo placeholder

### 1. Préparer votre photo
- **Format recommandé** : JPG ou PNG
- **Résolution optimale** : 500x500px ou plus (format carré)
- **Taille de fichier** : Moins de 2MB pour de meilleures performances
- **Style** : Photo professionnelle avec fond neutre ou transparent

### 2. Ajouter la photo au projet
1. Placez votre photo dans le dossier `src/assets/`
2. Nommez-la par exemple `profile-photo.jpg`

### 3. Modifier le composant ProfilePhoto

Ouvrez le fichier `src/components/ProfilePhoto.tsx` et remplacez cette section :

```tsx
{/* Profile Content */}
<div className="text-center z-10">
  <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
    <span className="text-4xl font-bold text-black">JM</span>
  </div>
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-white">Jerico MURRAY</h3>
    <p className="text-yellow-400 text-sm font-medium">Full-Stack Developer</p>
    <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-gold-500 mx-auto"></div>
  </div>
</div>
```

Par :

```tsx
{/* Profile Content */}
<img 
  src="/src/assets/profile-photo.jpg" 
  alt="Jerico MURRAY - Full-Stack Developer"
  className="w-full h-full object-cover"
/>
```

### 4. Alternative avec import ES6

Pour une meilleure optimisation, vous pouvez aussi importer l'image :

```tsx
// En haut du fichier ProfilePhoto.tsx
import profilePhoto from '../assets/profile-photo.jpg';

// Puis utiliser :
<img 
  src={profilePhoto} 
  alt="Jerico MURRAY - Full-Stack Developer"
  className="w-full h-full object-cover"
/>
```

### 5. Conseils pour une photo professionnelle

#### ✅ Bonnes pratiques :
- Éclairage naturel et uniforme
- Regard direct vers l'objectif
- Expression confiante et souriante
- Tenue professionnelle
- Arrière-plan neutre

#### ❌ À éviter :
- Photos floues ou pixelisées
- Éclairage trop sombre ou éblouissant
- Arrière-plans distrayants
- Selfies ou photos décontractées
- Expressions fermées

### 6. Options avancées

#### Plusieurs formats pour l'optimisation :
```tsx
<picture>
  <source srcSet="/src/assets/profile-photo.webp" type="image/webp" />
  <source srcSet="/src/assets/profile-photo.jpg" type="image/jpeg" />
  <img 
    src="/src/assets/profile-photo.jpg" 
    alt="Jerico MURRAY - Full-Stack Developer"
    className="w-full h-full object-cover"
  />
</picture>
```

#### Lazy loading :
```tsx
<img 
  src={profilePhoto} 
  alt="Jerico MURRAY - Full-Stack Developer"
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### 7. Test final

Après avoir ajouté votre photo :
1. Sauvegardez les fichiers
2. Vérifiez que l'image s'affiche correctement
3. Testez sur différentes tailles d'écran
4. Assurez-vous que l'image se charge rapidement

---

**Note** : Le cadre doré et les animations resteront en place, seule l'image à l'intérieur changera !
