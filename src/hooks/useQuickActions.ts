import { useEffect } from "react";
import { QuickActions } from "expo-quick-actions";
import { Href, Router } from "expo-router";

export default function useQuickActions(router: Router) {
  useEffect(() => {
    QuickActions.setItems([
      { id: "index", title: "Início", subtitle: "Ir para a tela inicial", icon: "home" },
      { id: "about", title: "Sobre", subtitle: "Informações do app", icon: "information" },
      { id: "profile", title: "Perfil", subtitle: "Ver seu perfil", icon: "person" },
    ]);

    const subscription = QuickActions.addListener((shortcut) => {
      if (shortcut) {
        router.push(`/${shortcut.id}` as Href);
      }
    });

    return () => subscription.remove();
  }, [router]);
}